import { MoreVertical, PlusCircle, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
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
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { ArrayTasks } from "../../exportable";

export function Tasks() {
  
  const data = ArrayTasks;

  const ITEMS_PER_PAGE = 8;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full pt-2 h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold self-start px-16">Tasks</h1>
      <div className="w-full h-24 top-0 flex justify-between px-16 items-center">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Task ID" />
          <Input name="name" placeholder="Task Title" />
          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" />
            Filter results
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Task</DialogTitle>
              <DialogDescription>Create a new task</DialogDescription>
            </DialogHeader>
            <form className="space-y-3 ">
              <div className="items-center gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" />
              </div>
              <div className="items-center gap-3">
                <Label htmlFor="desc">Description</Label>
                <Input id="desc" />
              </div>
              <div className="items-center gap-3">
                <Label htmlFor="desc">Delivery</Label>
                <Input id="desc" type="date" />
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

      <div className="border w-[calc(100%-100px)] h-[calc(100vh-240px)] p-2 rounded-lg">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>TITLE</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead>TASKED</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>CREATED AT</TableHead>
            <TableHead>DELIVERY</TableHead>
            <TableHead/>
          </TableHeader>
          <TableBody>
            {paginatedData.map((task) => {
              return (
                <TableRow key={task.id}>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.desc}</TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <TableCell className="cursor-pointer">{task.tasked}</TableCell>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Tasked</DialogTitle>
                        <DialogDescription>Assign this task to a User</DialogDescription>
                      </DialogHeader>
                      <form className="space-y-6 ">
                        <div className="items-center flex flex-row gap-3">
                          <Label htmlFor="name">Name</Label>
                          <Input placeholder="René Kemalandua" className="col-span-3" id="name" />
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <TableCell><Label className={ task.status==="Progress"?"border bg-orange-100 border-orange-600 text-orange-600  rounded-md px-2 py-1":task.status==="Done"?"border bg-green-100 border-green-600 text-green-600  rounded-md px-2 py-1": task.status==="Declined"?"border bg-red-100 border-red-600 text-red-600  rounded-md px-2 py-1":"border bg-gray-100 border-gray-600 text-gray-600  rounded-md px-2 py-1"}>{task.status}</Label></TableCell>
                  <TableCell>{task.delivery}</TableCell>
                  <TableCell>{task.created_at}</TableCell>
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
      <div className="w-[calc(100%-100px)] h-12 mt-1 bottom-0 flex  px-2 items-center">
          <div className="flex justify-start w-4/5 space-x-2 ">
            <Label>Al Tasks:</Label>
            <Label>{data.length}</Label>
          </div>
          <div className="flex justify-end  w-1/5">
            <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    startIndex === 0
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                  onClick={() => {
                    setStartIndex(startIndex - ITEMS_PER_PAGE);
                    setEndIndex(endIndex - ITEMS_PER_PAGE);
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className={
                    endIndex === totalPages
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                  onClick={() => {
                    setStartIndex(startIndex + ITEMS_PER_PAGE);
                    setEndIndex(endIndex + ITEMS_PER_PAGE);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
            </Pagination>
          </div>
      </div>
    </div>
  );
}
