import { PlusCircle, Search } from "lucide-react";
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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/rating/rating";

export function Users() {

  const ITEMS_PER_PAGE = 8;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
  //const paginatedData = data.slice(startIndex, endIndex);
  //const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full h-full pt-2 flex flex-col justify-center items-center bg-pattern bg-no-repeat bg-center">
      <h1 className="text-3xl font-bold self-start px-16">Users</h1>
      <div className="w-full h-24 top-0 flex justify-between px-16 items-center">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="User ID" />
          <Input name="name" placeholder="User Name" />
          <Button type="submit" variant="outline">
            <Search className="w-4 h-4 mr-2" />
            Filter results
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Users
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New User</DialogTitle>
              <DialogDescription>Create a new user</DialogDescription>
            </DialogHeader>
            <form className="space-y-6 ">
              <div className="items-center gap-3">
                <Label htmlFor="name">Name</Label>
                <Input placeholder="René Kemalandua" className="col-span-3" id="name" />
              </div>
              <div className="items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="kemalanduar@gmail.com" className="col-span-3" id="desc" />
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
      </div>

      <div className="border w-[calc(100%-100px)] h-[calc(100vh-240px)] p-2 rounded-lg">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>RATING</TableHead>
            <TableHead>CREATED AT</TableHead>
            <TableHead>LAST LOGIN</TableHead>
          </TableHeader>
          <TableBody>
            {(Array.from({ length: 15 }).slice(startIndex, endIndex)).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell><Link to={"/profile/"+(i+1)}>René Kemalandua</Link></TableCell>
                  <TableCell>kemalanduar@gmail.com</TableCell>
                  <TableCell ><Label className={i === 1?"border bg-green-100 border-green-600 text-green-600  rounded-md px-2 py-1":"border bg-red-100 border-red-600 text-red-600  rounded-md px-2 py-1"}>ACTIVE</Label></TableCell>
                  <TableCell className="flex flex-row items-center"><Rating isUp={true}/><Label>7.5</Label></TableCell>
                  <TableCell>12-11-2023</TableCell>
                  <TableCell>15-11-2023</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="w-[calc(100%-100px)] h-12 mt-1 bottom-0 flex  px-2 items-center">
          <div className="flex justify-start w-4/5 space-x-2 ">
            <Label>Al Users:</Label>
            <Label>30</Label>
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
                    endIndex === 4
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
