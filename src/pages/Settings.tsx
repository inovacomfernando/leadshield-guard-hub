
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ScoreConfig from "@/components/settings/ScoreConfig";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

const Settings: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="flex-1 p-8 pt-24 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t("settings.title")}</h1>
        <p className="text-muted-foreground">
          {t("settings.subtitle")}
        </p>
      </div>

      <Tabs defaultValue="score">
        <TabsList className="mb-8">
          <TabsTrigger value="account">{t("settings.account")}</TabsTrigger>
          <TabsTrigger value="score">{t("settings.scoreConfig")}</TabsTrigger>
          <TabsTrigger value="notifications">{t("settings.notifications")}</TabsTrigger>
          <TabsTrigger value="api">{t("settings.api")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={user?.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" defaultValue={user?.companyName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" defaultValue={user?.role} disabled />
                  </div>
                </div>
                <Button className="bg-forest-500 hover:bg-forest-600">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button variant="outline">Update Password</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="score">
          <ScoreConfig />
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for important events</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="lead-alerts" className="font-medium">Lead Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when suspicious leads are detected</p>
                  </div>
                  <Switch id="lead-alerts" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weekly-reports" className="font-medium">Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive a weekly summary of lead activity</p>
                  </div>
                  <Switch id="weekly-reports" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="billing-notifications" className="font-medium">Billing Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified about subscription and billing events</p>
                  </div>
                  <Switch id="billing-notifications" defaultChecked />
                </div>
              </div>
              <Button className="bg-forest-500 hover:bg-forest-600 mt-4">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Manage your API keys for integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex mt-2">
                    <Input
                      id="api-key"
                      value="sk_test_••••••••••••••••••••••••••"
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button variant="outline" className="ml-2">Regenerate</Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <div className="flex mt-2">
                    <Input
                      id="webhook-url"
                      placeholder="https://your-app.com/api/leadshield-webhook"
                      className="font-mono text-sm"
                    />
                    <Button variant="outline" className="ml-2">Save</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll send lead events to this URL in real-time
                  </p>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Integration Settings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-api" className="cursor-pointer">Enable API Access</Label>
                      <Switch id="enable-api" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="real-time-events" className="cursor-pointer">Real-time Events</Label>
                      <Switch id="real-time-events" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
