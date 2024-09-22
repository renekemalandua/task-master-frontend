import { Search, PlusCircle, MoreVertical } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/ui/table";
import { Checkbox } from "../../components/ui/checkbox";

export function Roles() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full h-1/6 pt-9 space-y-2 top-0 px-12">
        <h1 className="text-3xl font-bold">Roles & Permissions</h1>
        <div className="w-full flex justify-between items-center">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="Role ID" />
            <Input name="name" placeholder="Role Name" />
            <Button type="submit" variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Filter results
            </Button>
          </form>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Roles
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Role</DialogTitle>
                <DialogDescription>Create a new role</DialogDescription>
              </DialogHeader>
              <form className="space-y-6 ">
                <div className="items-center gap-3">
                  <Label htmlFor="name">Role</Label>
                  <Input
                    placeholder="administrador"
                    className="col-span-3"
                    id="name"
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="w-full h-5/6 flex flex-row justify-center items-center">
        <div className="flex justify-center items-center h-full w-4/12">
          <div className=" w-3/4 max-h-5/6 border  p-5 rounded-lg overflow-y-auto">
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead/>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 9 }).map((_, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>Administrator</TableCell>
                      <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <MoreVertical className="cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="shadow-lg rounded-md">
                          <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 1 selecionada")}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 2 selecionada")}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="h-full w-2/3 flex flex-col justify-center items-center" >
          
          <div className=" w-3/4 space-x-14 flex flex-row  mt-25  p-5 rounded-lg">
            <div className="space-x-2 flex items-center justify-center">
              <Label>All</Label>
              <Checkbox/>
            </div>

            <div className="space-x-2 flex items-center justify-center">
              <Label>Users</Label>
              <Checkbox/>
            </div>

            <div className="space-x-2 flex items-center justify-center">
              <Label>Tasks</Label>
              <Checkbox/>
            </div>

            <div className="space-x-2 flex items-center justify-center">
              <Label>Roles</Label>
              <Checkbox/>
            </div>
            
          </div>
          <div className=" w-3/4 border  p-5 rounded-lg">
            <Table>
              <TableHeader>
                <TableHead>MODULE PERMISSION</TableHead>
                <TableHead className="text-center">CREATE</TableHead>
                <TableHead className="text-center">READ</TableHead>
                <TableHead className="text-center">UPDATE</TableHead>
                <TableHead className="text-center">DELETE</TableHead>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }).map((_, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell >Users</TableCell>
                      <TableCell className="text-center"><Checkbox/></TableCell>
                      <TableCell className="text-center"><Checkbox/></TableCell>
                      <TableCell className="text-center"><Checkbox/></TableCell>
                      <TableCell className="text-center"><Checkbox/></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
