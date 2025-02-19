import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  return (
    <div className="flex h-full bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="flex-1 p-10">
        <div className="grid gap-8">
          {/* Stat Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Total Mana Stones 🪨", value: "98,765", change: "+25.4% from last month" },
              { title: "Shadow Soldiers ⚔️", value: "+1,250,000", change: "+500,000 since last battle" },
              { title: "Dungeon Clears 🏰", value: "+3,567", change: "+32% from last month" },
              { title: "Hunters Online 🏹", value: "+876", change: "+321 since last hour" },
            ].map((stat, index) => (
              <Card key={index} className="relative bg-gray-900 border border-cyan-500 shadow-lg shadow-cyan-500/30 rounded-lg p-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-cyan-400 text-lg font-bold">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-extrabold text-white drop-shadow-lg">{stat.value}</div>
                  <p className="text-sm text-cyan-300 mt-2">{stat.change}</p>
                  <div className="absolute inset-0 bg-cyan-500 opacity-10 blur-md rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Signups Table */}
          <Card className="bg-gray-900 border border-cyan-500 shadow-lg shadow-cyan-500/30 rounded-lg p-6">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-xl font-bold">Recent Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="border border-cyan-500 bg-black/40 text-white text-sm">
                <TableHeader className="bg-cyan-500/20">
                  <TableRow>
                    {["Name", "Email", "Role", "Status"].map((header, i) => (
                      <TableHead key={i} className="text-cyan-300 text-md font-semibold">{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Sung Jin-Woo", "jinwoo@hunterguild.com", "Shadow Monarch", "Active"],
                    ["Cha Hae-In", "chae@hunterguild.com", "S-Rank Hunter", "Active"],
                    ["Go Gun-Hee", "gunhee@hunterassociation.com", "Hunter Association Chairman", "Deceased"],
                    ["Baek Yoon-Ho", "baek@whiteguild.com", "S-Rank Hunter", "Active"],
                    ["Thomas Andre", "thomas@scavengerguild.com", "America's Strongest Hunter", "Active"],
                    ["Bellion", "bellion@shadowarmy.com", "Grand Marshal", "Active"],
                  ].map((row, index) => (
                    <TableRow key={index} className="hover:bg-cyan-500/10 transition">
                      {row.map((cell, i) => (
                        <TableHead key={i} className="py-3 px-4 text-cyan-200">{cell}</TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
