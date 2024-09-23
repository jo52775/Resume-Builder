export interface SaveResumeProps {
  contactFormData: {
    firstName: string;
    lastName: string;
    city: string;
    phoneNumber: string;
    email: string;
    link: string;
  };
  summaryFormData: string;
  educationFormData: {
    institutionName: string;
    major: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
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
  documentTitle:string;
}
