import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Mana Stones 🪨
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98,765</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +25.4% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Shadow Soldiers ⚔️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+1,250,000</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +500,000 since last battle
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Dungeon Clears 🏰
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+3,567</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +32% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Hunters Online 🏹
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+876</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +321 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
              </CardHeader>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableHead>Sung Jin-Woo</TableHead>
                      <TableHead>jinwoo@hunterguild.com</TableHead>
                      <TableHead>Shadow Monarch</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>

                    <TableRow>
                      <TableHead>Cha Hae-In</TableHead>
                      <TableHead>chae@hunterguild.com</TableHead>
                      <TableHead>S-Rank Hunter</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>

                    <TableRow>
                      <TableHead>Go Gun-Hee</TableHead>
                      <TableHead>gunhee@hunterassociation.com</TableHead>
                      <TableHead>Hunter Association Chairman</TableHead>
                      <TableHead>Deceased</TableHead>
                    </TableRow>

                    <TableRow>
                      <TableHead>Baek Yoon-Ho</TableHead>
                      <TableHead>baek@whiteguild.com</TableHead>
                      <TableHead>S-Rank Hunter</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>

                    <TableRow>
                      <TableHead>Thomas Andre</TableHead>
                      <TableHead>thomas@scavengerguild.com</TableHead>
                      <TableHead>America's Strongest Hunter</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>

                    <TableRow>
                      <TableHead>Bellion</TableHead>
                      <TableHead>bellion@shadowarmy.com</TableHead>
                      <TableHead>Grand Marshal</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
