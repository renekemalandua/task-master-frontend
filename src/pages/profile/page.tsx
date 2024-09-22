
import { Mail, Edit, Trash} from "lucide-react"
import { Label } from "../../components/ui/label"
import { useState } from "react"
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
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { ArrayTasks } from "../../exportable";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogHeader, DialogFooter } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";

export default function Profile() {
  const [display, setDisplay] = useState<"roles"|"progress"|"pending"| "declined" | "done">("pending");
  
  const data = ArrayTasks;
  const ITEMS_PER_PAGE = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
  return (
    <div className="w-full h-full flex-col  justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full flex justify-between items-center self-start pt-5 px-5">
          <Label className="text-3xl">Profile</Label>
          <div className="flex space-x-2">
            <Dialog>
            <DialogTrigger asChild>
              <Edit size="25" className="cursor-pointer"/>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
               <DialogTitle>Edit User</DialogTitle>
               <DialogDescription>Update user data</DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="name">
                <TabsList>
                    <TabsTrigger value="name">Name</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>

                <TabsContent value="name">
                  <form className="space-y-6 ">
                      <Input
                        placeholder="new name..."
                        id="name"
                      />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>

                <TabsContent value="email">
                  <form className="space-y-6 ">
                     <Input
                       placeholder="new email..."
                       type="email"
                       id="name"
                     />
                    <Input
                       placeholder="confirm new email..."
                       type="email"
                       id="name"
                    />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>

                <TabsContent value="password">
                  <form className="space-y-6 ">
                     <Input
                       placeholder="current password..."
                       type="password"
                       id="name"
                     />
                    <Input
                       placeholder="new password..."
                       type="password"
                       id="name"
                    />
                    <Input
                       placeholder="confirm password..."
                       type="password"
                       id="name"
                    />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>
            </Tabs>
            </DialogContent>
            </Dialog>

          <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash size="25" className="cursor-pointer"/>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete User</AlertDialogTitle> 
              <AlertDialogDescription>Are you sure that you wont delete this user ?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
              </AlertDialogCancel>
              <Button>Yes</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
            
          </div>
          
      </div>
      <div className="w-full flex items-center self-start pt-10 pl-5 space-x-5">
          <Label className="text-3xl">René Kemalandua</Label>
          <Label className="border bg-green-100 border-green-600 text-green-600  rounded-md px-2 py-1">ACTIVE</Label>
      </div>
      <Label className="flex flex-row text-zinc-500 items-center gap-2 pl-5"><Mail/> kemalanduar@gmail.com</Label>
      <div className="w-full flex items-end h-16 space-x-5 pl-5 p-2 border-b self-start">
          <Label onClick={()=>setDisplay("pending")} className="cursor-pointer">Pending</Label>
          <Label onClick={()=>setDisplay("progress")} className="cursor-pointer">Progress</Label>
          <Label onClick={()=>setDisplay("declined")} className="cursor-pointer">Declined</Label>
          <Label onClick={()=>setDisplay("done")} className="cursor-pointer">Done</Label>
          <Label onClick={()=>setDisplay("roles")} className="cursor-pointer">Roles</Label>
      </div>
      { display === "roles" && (
        <div className="w-full h-[calc(100vh-270px)] flex flex-col justify-center items-center">
        <div className="border w-1/2 h-4/5 p-2 mt-4 rounded-lg">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead/>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i+1}</TableCell>
                  <TableCell>Moderator</TableCell>
                  <TableCell><Checkbox/></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="w-6/12 h-1/5 mt-1 bottom-0 flex  px-2 items-center">
          <div className="flex justify-start w-4/5 space-x-2 ">
            <Label>Al Roles:</Label>
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
      )}
      { display === "progress" && (
        <div className="w-full h-[calc(100vh-270px)] flex flex-col justify-center items-center">
          <div className="border w-[calc(100%-100px)] h-4/5 p-2 mt-4 rounded-lg">
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>TASKED</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>DELIVERY</TableHead>
              </TableHeader>
              <TableBody>
                {paginatedData.map((task) => {
                  return (
                    <TableRow key={task.id}>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.desc}</TableCell>
                      <TableCell>{task.tasked}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.delivery}</TableCell>
                      <TableCell>{task.created_at}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="w-[calc(100%-100px)] h-1/5 mt-1 bottom-0 flex  px-2 items-center">
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
      )}
      { display === "pending" && (
        <div className="w-full h-[calc(100vh-270px)] flex flex-col justify-center items-center">
          <div className="border w-[calc(100%-100px)] h-4/5 p-2 mt-4 rounded-lg">
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>TASKED</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>DELIVERY</TableHead>
              </TableHeader>
              <TableBody>
                {paginatedData.map((task) => {
                  return (
                    <TableRow key={task.id}>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.desc}</TableCell>
                      <TableCell>{task.tasked}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.delivery}</TableCell>
                      <TableCell>{task.created_at}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="w-[calc(100%-100px)] h-1/5 mt-1 bottom-0 flex  px-2 items-center">
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
      )}
      { display === "declined" && (
        <div className="w-full h-[calc(100vh-270px)] flex flex-col justify-center items-center">
            <div className="border w-[calc(100%-100px)] h-4/5 p-2 mt-4 rounded-lg">
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>TASKED</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>DELIVERY</TableHead>
              </TableHeader>
              <TableBody>
                {paginatedData.map((task) => {
                  return (
                    <TableRow key={task.id}>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.desc}</TableCell>
                      <TableCell>{task.tasked}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.delivery}</TableCell>
                      <TableCell>{task.created_at}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="w-[calc(100%-100px)] h-1/5 mt-1 bottom-0 flex  px-2 items-center">
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
      )}
      { display === "done" && (
        <div className="w-full h-[calc(100vh-270px)] flex flex-col justify-center items-center">
            <div className="border w-[calc(100%-100px)] h-4/5 p-2 mt-4 rounded-lg">
            <Table>
              <TableHeader>
                <TableHead>ID</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>TASKED</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>DELIVERY</TableHead>
              </TableHeader>
              <TableBody>
                {paginatedData.map((task) => {
                  return (
                    <TableRow key={task.id}>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.desc}</TableCell>
                      <TableCell>{task.tasked}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.delivery}</TableCell>
                      <TableCell>{task.created_at}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="w-[calc(100%-100px)] h-1/5 mt-1 bottom-0 flex  px-2 items-center">
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
      )}
      
    </div>
  )
}
