export interface ProfilWisataProps {
    id: number;
    title: string;
    image: string;
    desc: string;
    wisataDesc: string;
  }
  export interface Package {
    id: number;
    title: string;
    image: string[];
  }
  
  export interface activity {
    title: string;
    desc: string;
    icon: React.FC;
  }
  
  export interface located {
    sumber: string;
    title: string;
    desc: string;
  }