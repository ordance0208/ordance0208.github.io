interface IJob {
  role: string;
  employer: string;
  type: 'Internship' | 'Full Time' | 'Part Time';
  arrangement: 'remote' | 'on site' | 'hybrid';
  description: string[];
  startDate: string,
  endDate: string;
}

export default IJob;
