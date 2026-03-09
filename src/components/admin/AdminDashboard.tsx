import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { BlogTab } from "./tabs/BlogTab";
import { NavigationTab } from "./tabs/NavigationTab";
import { SettingsTab } from "./tabs/SettingsTab";
import { LeadsTab } from "./tabs/LeadsTab";
import { LogOut, Phone, FileText, Navigation, Settings, Users } from "lucide-react";

interface AdminDashboardProps {
  userEmail?: string;
  onSignOut: () => void;
}

export function AdminDashboard({ userEmail, onSignOut }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-lg font-bold">HomeSnapFix Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{userEmail}</span>
            <Button variant="ghost" size="sm" onClick={onSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <div className="container py-6">
        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="leads" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Leads</span>
            </TabsTrigger>
            <TabsTrigger value="basic-info" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Basic Info</span>
            </TabsTrigger>
            <TabsTrigger value="blog" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Blog</span>
            </TabsTrigger>
            <TabsTrigger value="navigation" className="gap-2">
              <Navigation className="h-4 w-4" />
              <span className="hidden sm:inline">Navigation</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads"><LeadsTab /></TabsContent>
          <TabsContent value="basic-info"><BasicInfoTab /></TabsContent>
          <TabsContent value="blog"><BlogTab /></TabsContent>
          <TabsContent value="navigation"><NavigationTab /></TabsContent>
          <TabsContent value="settings"><SettingsTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
