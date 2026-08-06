import { useState } from "react";

const CATEGORIES = [
    { id: "education", title: "Educational Scholarships & Quotas", disabled: false },
    { id: "agriculture", title: "Agricultural Subsidies & Loans", disabled: false },
    { id: "senior", title: "Senior Citizens", disabled: false },
];

const BASE_CLASSES = {
    input: 'text-lg w-full px-3 py-2 border-2 border-border-subtle rounded-md outline-none focus:ring-2 focus:ring-footer-bg',
    label: 'font-bold text-text-main text-lg',
};

// const ACTIVE_CLASSES = {
//     input: '',
//     label: '',
// };

export function EligibilityChecker() {
    

    const [selectedCategories, setSelectedCategories] = useState(['chooseBenefitCategory', 'demographicInfo']);
    const [activeSection, setActiveSection] = useState(selectedCategories[0] || '');

    // Navigate forward
    const handleNext = () => {
        const currentIndex = selectedCategories.indexOf(activeSection);
        if (currentIndex < selectedCategories.length - 1) {
            setActiveSection(selectedCategories[currentIndex + 1]);
        }
    };

    // Navigate backward
    const handleBack = () => {
        const currentIndex = selectedCategories.indexOf(activeSection);
        if (currentIndex > 0) {
            setActiveSection(selectedCategories[currentIndex - 1]);
        }
    };

    // Button disabled states
    const isFirstStep = selectedCategories.indexOf(activeSection) <= 0;
    const isLastStep = selectedCategories.indexOf(activeSection) === selectedCategories.length - 1;


    const toggleCategory = (id, disabled) => {
        if (disabled) return;

        setSelectedCategories((prev) =>
            prev.includes(id) 
                ? prev.filter((item) => item !== id) 
                : [...prev, id]
        );
    };

    const [formData, setFormData] = useState({
        age: '',
        province: '',
        district: '',
        household_income: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div
            className="px-4 md:px-0"
        >
            {
                (activeSection === 'chooseBenefitCategory') && 
                <section
                id="chooseBenefitCategory"
                className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg">
                    <div  className="w-full">
                        <div className="mb-8">
                            <h1 className="text-text-main text-3xl font-extrabold leading-snug">
                                What benefits or assistance are you looking for today?
                            </h1>
                            <p className="text-text-muted text-lg mt-2 max-w-2xl">
                                Select all categories that apply to your current situation. This will customize your questionnaire.
                            </p>
                        </div>
                    </div>

                    {/* Render simple selectable divs */}
                    <div
                        id="categoryFilter"
                        className="space-y-3">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategories.includes(cat.id);

                            return (
                                <div
                                    key={cat.id}
                                    onClick={() => toggleCategory(cat.id, cat.disabled)}
                                    className={`w-full border-2 rounded-md p-4 transition-colors ${
                                        cat.disabled
                                            ? "bg-text-muted border-gray-200 opacity-60 cursor-not-allowed"
                                            : isSelected
                                            ? "bg-primary/5 border-primary-hover cursor-pointer"
                                            : "bg-page-bg border-border-subtle hover:border-text-muted cursor-pointer"
                                    }`}
                                >
                                    <p className={`text-lg font-medium ${isSelected ? "text-blue-900" : ""}`}>
                                        {cat.title}
                                        {cat.disabled && (
                                            <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                                                Coming Soon
                                            </span>
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            }

            {
                (activeSection === 'demographicInfo') &&
            
                <section
                    id="demographicInfo"
                    className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg"
                >
                    <div  className="w-full">
                        <div className="mb-8">
                            <h1 className="text-text-main text-3xl font-extrabold leading-snug">
                                Basic Information
                            </h1>
                            <p className="text-text-muted text-lg mt-2 max-w-2xl">
                                Please provide your accurate information to receive all eligible benefits.
                            </p>
                        </div>
                    </div>


                    {/* Form Fields */}
                    <div className="grid space-y-8">
                        {/* Age */}
                        <div
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor=""
                                className={BASE_CLASSES['label']}
                            >
                                Enter Age
                            </label>
                            <input
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className={BASE_CLASSES['input']}
                                type="number" placeholder="Eg. 60"/>
                        </div>


                        {/* Province */}
                        <div
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor=""
                                className={BASE_CLASSES['label']}
                            >
                                Select Province
                            </label>
                            <select
                                className={`${BASE_CLASSES['input']} px-3 py-3`}
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                >
                                <option value="" disabled>Select a province</option>
                                {['koshi', 'madhesh', 'bagmati', 'gandaki', 'lumbini', 'karnali', 'sudurpaschim'].map((item) => (
                                    <option key={item} value={item}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* District */}
                        <div
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor=""
                                className={BASE_CLASSES['label']}
                            >
                                Select District
                            </label>
                            <select
                                className={`${BASE_CLASSES['input']} px-3 py-3`}
                                name="province"
                                value={formData.district}
                                onChange={handleChange}
                                >
                                <option value="" disabled>Select a district</option>
                                {['koshi', 'madhesh', 'bagmati', 'gandaki', 'lumbini', 'karnali', 'sudurpaschim'].map((item) => (
                                    <option key={item} value={item}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Household Annual Income */}
                        <div
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor=""
                                className={BASE_CLASSES['label']}
                            >
                                Enter Household Income (Annual)
                            </label>
                            <input
                                name="age"
                                value={formData.household_income}
                                onChange={handleChange}
                                className={BASE_CLASSES['input']}
                                type="number" placeholder="Eg. 100000"/>
                        </div>

                    </div>
                    

                </section>
            }

            {
                (activeSection === 'education') &&
                <section
                    id="education"
                    className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg"
                >
                    You're in education section.
                </section>
            }

            {
                (activeSection === 'senior') &&
                <section
                    id="senior"
                    className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg"
                >
                    You're in senior citizens section.
                </section>
            }

            {
                (activeSection === 'agriculture') &&
                <section
                    id="agriculture"
                    className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg"
                >
                    You're in agriculture section.
                </section>
            }


            {/* JSX Buttons */}
            <div className="max-w-3xl w-full mx-auto flex justify-between mt-8 pb-16">
                <button 
                    onClick={handleBack} 
                    disabled={isFirstStep}
                    className="px-4 py-2 border rounded-md disabled:opacity-50"
                >
                    &lt; Back
                </button>
                
                <button 
                    onClick={handleNext} 
                    disabled={isLastStep}
                    className="px-4 py-2 bg-blue-700 text-white rounded-md disabled:opacity-50"
                >
                    Continue &gt;
                </button>
            </div>
            

            {/* {selectedCategories.includes("education") && (
                <section
                    id="education"
                    className={!selectedCategories.includes('agriculture') ? 'hidden' : ''}
                    className="w-full max-w-3xl my-16 mx-auto bg-muted-bg p-8 rounded-lg"
                >
                    This section contains education questions
                </section>
            )} */}
        </div>
    );
}