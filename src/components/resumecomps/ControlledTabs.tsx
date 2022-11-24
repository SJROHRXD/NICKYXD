import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { JobDescription } from "./JobDescription";
import { CompanyInfo } from "./CompanyInfo";

export function ControlledTabs() {
  const [key, setKey] = useState("first");
  return (
    <Tabs id="controlledTabsWTF" activeKey={key} onSelect={(k) => setKey(k!)}>
      <Tab eventKey="first" title="Job Description">
        <JobDescription />
      </Tab>
      <Tab eventKey="companyInfo" title="Company Info">
        <CompanyInfo />
      </Tab>
    </Tabs>
  );
}
