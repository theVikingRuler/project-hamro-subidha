import { useState, useEffect, useMemo } from "react";

import { useBenefitsData } from '../hooks/useBenefitsData';
import { BenefitCard } from "../components/benefits/BenefitCard";

const CATEGORIES = [
  { id: "education", title: "Educational Scholarships & Quotas", disabled: false },
  { id: "agriculture", title: "Agricultural Subsidies & Loans", disabled: false },
  { id: "senior", title: "Senior Citizens", disabled: false },
];

const QUOTA_OPTIONS = [
  { value: "dalit", label: "Dalit" },
  { value: "janajati", label: "Janajati" },
  { value: "madhesi", label: "Madhesi" },
  { value: "tharu", label: "Tharu" },
  { value: "muslim", label: "Muslim" },
  { value: "backward_region", label: "Backward Region" },
  { value: "martyr_family", label: "Martyr Family" },
];

const PROVINCES = [
  { value: "koshi", label: "Koshi" },
  { value: "madhesh", label: "Madhesh" },
  { value: "bagmati", label: "Bagmati" },
  { value: "gandaki", label: "Gandaki" },
  { value: "lumbini", label: "Lumbini" },
  { value: "karnali", label: "Karnali" },
  { value: "sudurpaschim", label: "Sudurpaschim" },
];

const BASE_CLASSES = {
  input: "text-lg w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 bg-white transition-all",
  select: "appearance-none text-lg w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 bg-white transition-all cursor-pointer",
  label: "font-bold text-gray-800 text-lg",
};

export function EligibilityChecker() {

  const [formData, setFormData] = useState({
    categories: ['education'],
    is_nepali_citizen: true,
    age: 16,
    province: "bagmati",
    district: "Kathmandu",
    household_income: 2000000,
    quota_group: ['janajati'],
    disability_card_type: "none",
    grade_level: "10",
    school_type: "government",
    gpa: "3.9",
    entrance_exam_taken: 'yes',
    agricultural_investment: "",
    requires_land_ownership: null,
    requires_cooperative_membership: null,
    requires_oldage_card: null,
    receives_pension: null,
  });

  const { data: BENEFITS_DB } = useBenefitsData();

  const steps = ["chooseBenefitCategory", "demographicInfo", ...formData.categories, "userProfile", "eligibleBenefits"];
  const [activeSection, setActiveSection] = useState(steps[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const currentIndex = steps.indexOf(activeSection);
  const isFirstStep = currentIndex <= 0;
  const isLastStep = currentIndex === steps.length - 1;
  const handleNext = () => { if (!isLastStep) setActiveSection(steps[currentIndex + 1]); };
  const handleBack = () => { if (!isFirstStep) setActiveSection(steps[currentIndex - 1]); };

  const toggleCategory = (id, disabled) => {
    if (disabled) return;
    setFormData((prev) => {
      const exists = prev.categories.includes(id);
      return {
        ...prev,
        categories: exists ? prev.categories.filter((cat) => cat !== id) : [...prev.categories, id],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooleanToggle = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleQuotaToggle = (value) => {
    setFormData((prev) => {
      const exists = prev.quota_group.includes(value);
      return {
        ...prev,
        quota_group: exists 
          ? prev.quota_group.filter((item) => item !== value)
          : [...prev.quota_group, value]
      };
    });
  };

  // --- FILTERING LOGIC ---
  const eligibleBenefits = useMemo(() => {
    if (activeSection !== "eligibleBenefits" && activeSection !== "userProfile") return [];

    return BENEFITS_DB.filter((benefit) => {
      if (!formData.categories.includes(benefit.program_category)) return false;

      if (benefit.requires_nepali_citizen && formData.is_nepali_citizen !== true) return false;
      
      if (!benefit.allowed_provinces.includes("all") && !benefit.allowed_provinces.includes(formData.province)) return false;

      if (!benefit.allowed_districts.includes("all") && !benefit.allowed_districts.includes(formData.district.toLowerCase())) return false;

      const userAge = formData.age !== "" ? Number(formData.age) : null;
      if (benefit.age_min !== null && userAge < benefit.age_min) return false;
      if (benefit.age_max !== null && userAge > benefit.age_max) return false;

      const userIncome = Number(formData.household_income || 0);
      if (benefit.household_income_max !== null && userIncome > benefit.household_income_max) return false;

      if (!benefit.quota_eligibility.includes("all")) {
        const allowedQuotas = benefit.quota_eligibility.split(",").map(q => q.trim());
        const hasMatchingQuota = allowedQuotas.some(q => formData.quota_group.includes(q));
        if (!hasMatchingQuota) return false;
      }

      if (benefit.program_category === "education") {
        if (benefit.schools_attended_type && !benefit.schools_attended_type.includes("all") && !benefit.schools_attended_type.includes(formData.school_type)) return false;
        if (benefit.gpa_cutoff !== null && Number(formData.gpa || 0) < benefit.gpa_cutoff) return false;
      }

      if (benefit.program_category === "senior") {
        if (benefit.requires_oldage_card && !formData.requires_oldage_card) return false;
        if (benefit.disqualifies_pensioners && formData.receives_pension) return false;
      }

      if (benefit.program_category === "agriculture") {
        const userInvestment = Number(formData.agricultural_investment || 0);
        if (benefit.agricultural_investment_min !== null && userInvestment < benefit.agricultural_investment_min) return false;
        if (benefit.agricultural_investment_max !== null && userInvestment > benefit.agricultural_investment_max) return false;
        if (benefit.requires_cooperative_membership && !formData.requires_cooperative_membership) return false;
      }

      return true;
    });
  }, [BENEFITS_DB, formData, activeSection]);

  // UI Helpers
  const CustomSelect = ({ label, name, value, options, onChange, placeholder }) => (
    <div className="flex flex-col gap-2">
      <label className={BASE_CLASSES.label}>{label}</label>
      <div className="relative">
        <select name={name} value={value} onChange={onChange} className={BASE_CLASSES.select}>
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );

  const YesNoToggle = ({ label, value, onChange }) => (
    <div className="flex flex-col gap-2">
      <label className={BASE_CLASSES.label}>{label}</label>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`flex-1 py-3 px-4 rounded-lg border-2 text-lg font-medium transition-all ${
            value === true ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
          }`}
        >Yes</button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`flex-1 py-3 px-4 rounded-lg border-2 text-lg font-medium transition-all ${
            value === false ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
          }`}
        >No</button>
      </div>
    </div>
  );

  // Safe Profile Display Helpers formatted in Uppercase
  const displayValue = (val) => {
    if (val === true || val === "yes" || val === "YES") return "YES";
    if (val === false || val === "no" || val === "NO") return "NO";
    if (val === null || val === undefined || val === "") return "N/A";
    return val.toString().toUpperCase();
  };

  const getProvinceLabel = (val) => {
    const match = PROVINCES.find((p) => p.value === val?.toLowerCase())?.label;
    return match ? match.toUpperCase() : "N/A";
  };
  
  const getQuotaLabels = (arr) => {
    if (!arr || arr.length === 0) return "NONE";
    return arr
      .map(val => QUOTA_OPTIONS.find(opt => opt.value === val)?.label || val)
      .join(", ")
      .toUpperCase();
  };

  const getGradeLabel = (val) => {
    const map = { primary: "Primary Level", "10": "Class 10 (SEE)", "plus-two": "+2 / Higher Secondary", bachelor: "Bachelor's Degree" };
    const label = map[val] || val || "N/A";
    return label.toUpperCase();
  };

  const getSchoolTypeLabel = (val) => {
    const map = { government: "Government / Public", private: "Private / Institutional" };
    const label = map[val] || val || "N/A";
    return label.toUpperCase();
  };

  const ProfileRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold text-right uppercase">{value}</span>
    </div>
  );

  return (
    <div className="px-4 md:px-0">
      {/* Category Selection */}
      {activeSection === "chooseBenefitCategory" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-8">
            <h1 className="text-gray-900 text-3xl font-extrabold leading-snug">What benefits or assistance are you looking for today?</h1>
            <p className="text-gray-600 text-lg mt-2 max-w-2xl">Select all categories that apply to your current situation.</p>
          </div>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => toggleCategory(cat.id, cat.disabled)}
                className={`w-full border-2 rounded-lg p-5 transition-all ${
                  cat.disabled ? "bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed" : formData.categories.includes(cat.id) ? "bg-blue-50 border-blue-600 cursor-pointer shadow-sm" : "bg-white border-gray-200 hover:border-blue-400 cursor-pointer"
                }`}
              >
                <p className={`text-lg font-semibold ${formData.categories.includes(cat.id) ? "text-blue-900" : "text-gray-800"}`}>
                  {cat.title}
                  {cat.disabled && <span className="ml-3 text-xs font-medium text-gray-500 bg-gray-200 px-2.5 py-1 rounded-full">Coming Soon</span>}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Demographics */}
      {activeSection === "demographicInfo" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-8">
            <h1 className="text-gray-900 text-3xl font-extrabold leading-snug">Basic Information</h1>
            <p className="text-gray-600 text-lg mt-2 max-w-2xl">Please provide accurate information to determine your eligibility.</p>
          </div>
          <div className="grid space-y-8">
            <YesNoToggle label="Are you a Nepali Citizen?" value={formData.is_nepali_citizen} onChange={(val) => handleBooleanToggle("is_nepali_citizen", val)} />
            <div className="flex flex-col gap-2">
              <label className={BASE_CLASSES.label}>Enter Age</label>
              <input name="age" value={formData.age} onChange={handleChange} className={BASE_CLASSES.input} type="number" placeholder="Eg. 60" />
            </div>
            <CustomSelect label="Select Province" name="province" value={formData.province} onChange={handleChange} placeholder="Select a province" options={PROVINCES} />
            <div className="flex flex-col gap-2">
              <label className={BASE_CLASSES.label}>Select District</label>
              <input type="text" name="district" value={formData.district} onChange={handleChange} className={BASE_CLASSES.input} placeholder="Enter your district" />
            </div>
            <div className="flex flex-col gap-2">
              <label className={BASE_CLASSES.label}>Enter Household Income (Annual NPR)</label>
              <input name="household_income" value={formData.household_income} onChange={handleChange} className={BASE_CLASSES.input} type="number" placeholder="Eg. 100000" />
            </div>
            <div className="flex flex-col gap-3">
              <label className={BASE_CLASSES.label}>Quota Eligibility Group (Select all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {QUOTA_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleQuotaToggle(opt.value)}
                    className={`px-4 py-2 rounded-full border-2 text-[15px] font-medium transition-all ${
                      formData.quota_group.includes(opt.value) ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <CustomSelect
              label="Disability Card Type" name="disability_card_type" value={formData.disability_card_type} onChange={handleChange} placeholder="Select Card Color"
              options={[
                { value: "none", label: "None" },
                { value: "red", label: "Red (Profound Disability)" },
                { value: "blue", label: "Blue (Severe Disability)" },
                { value: "yellow", label: "Yellow (Moderate Disability)" },
                { value: "white", label: "White (Mild Disability)" },
              ]}
            />
          </div>
        </section>
      )}

      {/* Education Step */}
      {activeSection === "education" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
          <h1 className="text-gray-900 text-3xl font-extrabold leading-snug mb-2">Education Details</h1>
          <CustomSelect
            label="Current/Highest Educational Qualification" name="grade_level" value={formData.grade_level} onChange={handleChange} placeholder="Select Qualification"
            options={[
              { value: "primary", label: "Primary Level" },
              { value: "10", label: "Class 10 (SEE)" },
              { value: "plus-two", label: "+2 / Higher Secondary" },
              { value: "bachelor", label: "Bachelor's Degree" },
            ]}
          />
          <CustomSelect
            label="Type of School Attended" name="school_type" value={formData.school_type} onChange={handleChange} placeholder="Select School Type"
            options={[
              { value: "government", label: "Government / Public" },
              { value: "private", label: "Private / Institutional" },
            ]}
          />
          <div className="flex flex-col gap-2">
            <label className={BASE_CLASSES.label}>Obtained GPA (Optional)</label>
            <input type="number" step="0.01" max="4.0" name="gpa" value={formData.gpa} onChange={handleChange} className={BASE_CLASSES.input} placeholder="Eg. 3.2" />
          </div>
          <YesNoToggle label="Have you passed the required entrance exam?" value={formData.entrance_exam_taken} onChange={(val) => handleBooleanToggle("entrance_exam_taken", val)} />
        </section>
      )}

      {/* Senior Step */}
      {activeSection === "senior" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
          <h1 className="text-gray-900 text-3xl font-extrabold leading-snug mb-2">Senior Citizen Details</h1>
          <YesNoToggle label="Do you possess a Senior Citizen / Old-Age Identity Card?" value={formData.requires_oldage_card} onChange={(val) => handleBooleanToggle("requires_oldage_card", val)} />
          <YesNoToggle label="Are you currently receiving any government pension?" value={formData.receives_pension} onChange={(val) => handleBooleanToggle("receives_pension", val)} />
        </section>
      )}

      {/* Agriculture Step */}
      {activeSection === "agriculture" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
          <h1 className="text-gray-900 text-3xl font-extrabold leading-snug mb-2">Agriculture Details</h1>
          <div className="flex flex-col gap-2">
            <label className={BASE_CLASSES.label}>Planned/Current Agricultural Investment Amount</label>
            <input type="number" name="agricultural_investment" value={formData.agricultural_investment} onChange={handleChange} className={BASE_CLASSES.input} placeholder="Eg. 50000" />
          </div>
          <YesNoToggle label="Do you own agricultural land?" value={formData.requires_land_ownership} onChange={(val) => handleBooleanToggle("requires_land_ownership", val)} />
          <YesNoToggle label="Are you a member of an agricultural cooperative?" value={formData.requires_cooperative_membership} onChange={(val) => handleBooleanToggle("requires_cooperative_membership", val)} />
        </section>
      )}

      {/* Profile Review Step */}
      {activeSection === "userProfile" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-8">
            <h2 className="text-gray-900 text-2xl font-bold">Review Your Profile</h2>
            <p className="text-gray-600 mt-1">Please confirm all your entered details before checking eligibility.</p>
          </div>

          <div className="space-y-6">
            {/* Basic Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Basic Information</h2>
              <ProfileRow label="Nepali Citizen" value={displayValue(formData.is_nepali_citizen)} />
              <ProfileRow label="Age" value={displayValue(formData.age)} />
              <ProfileRow label="Province" value={getProvinceLabel(formData.province)} />
              <ProfileRow label="District" value={displayValue(formData.district)} />
              <ProfileRow label="Annual Income" value={formData.household_income ? `NPR ${formData.household_income}` : "N/A"} />
              <ProfileRow label="Quota Eligibility" value={getQuotaLabels(formData.quota_group)} />
              <ProfileRow label="Disability Card" value={displayValue(formData.disability_card_type)} />
            </div>

            {/* Education Section */}
            {formData.categories.includes("education") && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Education Details</h2>
                <ProfileRow label="Highest Qualification" value={getGradeLabel(formData.grade_level)} />
                <ProfileRow label="School Type" value={getSchoolTypeLabel(formData.school_type)} />
                <ProfileRow label="Obtained GPA" value={displayValue(formData.gpa)} />
                <ProfileRow label="Entrance Exam Passed" value={displayValue(formData.entrance_exam_taken)} />
              </div>
            )}

            {/* Senior Section */}
            {formData.categories.includes("senior") && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Senior Citizen Details</h2>
                <ProfileRow label="Old-Age Identity Card" value={displayValue(formData.requires_oldage_card)} />
                <ProfileRow label="Receives Pension" value={displayValue(formData.receives_pension)} />
              </div>
            )}

            {/* Agriculture Section */}
            {formData.categories.includes("agriculture") && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Agriculture Details</h2>
                <ProfileRow label="Agricultural Investment" value={formData.agricultural_investment ? `NPR ${formData.agricultural_investment}` : "N/A"} />
                <ProfileRow label="Owns Agricultural Land" value={displayValue(formData.requires_land_ownership)} />
                <ProfileRow label="Cooperative Membership" value={displayValue(formData.requires_cooperative_membership)} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Standalone Step: Eligible Benefits */}
      {activeSection === "eligibleBenefits" && (
        <section className="w-full max-w-3xl my-16 mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-8 text-center">
            <h1 className="text-gray-900 text-3xl font-extrabold leading-snug">
              Your Eligible Benefits
            </h1>
            <p className="text-gray-600 text-lg mt-2">
              Based on your details, here are the programs you qualify for.
            </p>
          </div>

          {eligibleBenefits.length > 0 ? (
            <div className="space-y-4">
              {eligibleBenefits.map((benefit) => (
                <BenefitCard
                  key={benefit.id}
                  item={benefit}
                />
              ))}
            </div>
          ) : (
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No exact matches found</h3>
              <p className="text-gray-600">Based on your provided details, we couldn't match you automatically with specific programs at this time.</p>
            </div>
          )}
        </section>
      )}

      {/* Navigation Buttons */}
      <div className="max-w-3xl w-full mx-auto flex justify-between mt-8 pb-16">
        <button
          onClick={handleBack}
          disabled={isFirstStep}
          className="px-8 py-3 border-2 border-gray-300 font-bold text-gray-700 rounded-lg disabled:opacity-40 hover:bg-gray-100 bg-white transition-colors"
        >
          &lt; Back
        </button>

        {!isLastStep && (
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-blue-700 font-bold text-white rounded-lg hover:bg-blue-800 transition-colors shadow-md"
          >
            Continue &gt;
          </button>
        )}
      </div>
    </div>
  );
}