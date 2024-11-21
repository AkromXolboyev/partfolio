'use client';

import { Button } from "../ui/button";

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/akrom kalbayev.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
