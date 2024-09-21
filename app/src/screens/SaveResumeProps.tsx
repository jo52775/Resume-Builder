export interface SaveResumeProps {
  contactFormData: {
    city: string;
    phoneNumber: string;
    email: string;
    link: string;
  };
  summaryFormData: string;
  educationFormData: {
    institutionName: string;
    major: string;
    degreeLevel: string;
    startDate: string;
    endDate: string;
  };
  experienceFormData: {
    companyName: string;
    positionTitle: string;
    keyResponsibilities: string;
    startDate: string;
    endDate: string;
    city: string;
  };
  projectsFormData: {
    projectType: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
  };
  skillsFormData: string[];
}
