import { CircleUser, FileCheck, FileQuestion, FileText, FileWarning } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";

export function Dashbord() {
  return (
    <div className="w-full h-full space-y-8 flex flex-col justify-start items-center">
      <div className="w-full self-start flex flex-row justify-around space-x-5 items-center pt-16 px-16">
        <Card className="w-1/5 h-40 border-2">
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <CardDescription className="w-full flex items-center justify-center"><CircleUser size="60"/></CardDescription>
            <div className="w-full flex justify-end"><Label className="text-2xl text-center pb-5">98</Label></div>
          </CardContent>
        </Card>
        <Card className="w-1/5 h-40 border-2 bg-gray-200 border-gray-600 text-gray-600">
          <CardHeader>
            <CardTitle>Tasks Pending</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <CardDescription className="w-full flex items-center justify-center"><FileQuestion className="text-gray-600" size="60"/></CardDescription>
            <div className="w-full flex justify-end"><Label className="text-2xl text-center pb-5">98</Label></div>
          </CardContent>
        </Card>
        <Card className="w-1/5 h-40 border-2 bg-orange-200 border-orange-600 text-orange-600">
          <CardHeader>
            <CardTitle>Tasks on Progress</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <CardDescription className="w-full flex items-center justify-center"><FileText className="text-orange-600" size="60"/></CardDescription>
            <div className="w-full flex justify-end"><Label className="text-2xl text-center pb-5">98</Label></div>
          </CardContent>
        </Card>
        <Card className="w-1/5 h-40 border-2 bg-red-200 border-red-600 text-red-600">
          <CardHeader>
            <CardTitle>Tasks Declined</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <CardDescription className="w-full flex items-center justify-center"><FileWarning className="text-red-600" size="60"/></CardDescription>
            <div className="w-full flex justify-end"><Label className="text-2xl">98</Label></div>
          </CardContent>
        </Card>
        <Card className="w-1/5 h-40 border-2 bg-green-200 border-green-600 text-green-600">
          <CardHeader>
            <CardTitle>Tasks Done</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <CardDescription className="w-full flex items-center justify-center"><FileCheck className="text-green-600" size="60"/></CardDescription>
            <div className="w-full flex justify-end"><Label className="text-2xl">98</Label></div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full self-start flex flex-row space-x-7 justify-between items-center px-16">
        <Card className="w-1/2 h-80">
          <CardHeader>
            <CardTitle>Grafico 1</CardTitle>
            <CardDescription>Tasks Registe</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-1/2 h-80">
          <CardHeader>
            <CardTitle>Grafico 2</CardTitle>
            <CardDescription>I dont know</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}
