import { getIndustryInsights } from "@/actions/dashboard";
import {getUserOnboardingStatus} from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./components/dashboard-view";
const IndustryInsightsPage = async()=>{
  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();
  
  if(!isOnboarded){
      redirect("/Onboarding");
  }
  return (
  <div className="container mx-auto">
    <DashboardView insights={insights}/>
  </div>
  ); 
};

export default  IndustryInsightsPage;
