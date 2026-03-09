import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Loader2, Plus, Pencil, Trash2, Eye } from "lucide-react";
import { blogCategories, type BlogCategory } from "@/data/blogPosts";

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  meta_description: string | null;
  category: string;
  publish_date: string;
  reading_time: number;
  featured: boolean;
  is_pillar: boolean;
  excerpt: string | null;
  content: string;
  status: string;
  created_at: string;
}

const emptyPost = {
  slug: "",
  title: "",
  meta_description: "",
  category: "home-maintenance" as string,
  publish_date: new Date().toISOString().split("T")[0],
  reading_time: 5,
  featured: false,
  is_pillar: false,
  excerpt: "",
  content: "",
  status: "draft",
};

export function BlogTab() {
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPostRow | null>(null);
  const [form, setForm] = useState(emptyPost);
  const [saving, setSaving] = useState(false);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyPost);
    setDialogOpen(true);
  };

  const openEdit = (post: BlogPostRow) => {
    setEditing(post);
    setForm({
      slug: post.slug,
      title: post.title,
      meta_description: post.meta_description || "",
      category: post.category,
      publish_date: post.publish_date,
      reading_time: post.reading_time,
      featured: post.featured,
      is_pillar: post.is_pillar,
      excerpt: post.excerpt || "",
      content: post.content,
      status: post.status,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.content) {
      toast({ title: "Missing fields", description: "Title, slug, and content are required.", variant: "destructive" });
      return;
    }
    setSaving(true);

    if (editing) {
      const { error } = await supabase
        .from("blog_posts")
        .update({
          slug: form.slug,
          title: form.title,
          meta_description: form.meta_description || null,
          category: form.category,
          publish_date: form.publish_date,
          reading_time: form.reading_time,
          featured: form.featured,
          is_pillar: form.is_pillar,
          excerpt: form.excerpt || null,
          content: form.content,
          status: form.status,
          updated_date: new Date().toISOString().split("T")[0],
        })
        .eq("id", editing.id);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Updated" });
        setDialogOpen(false);
        fetchPosts();
      }
    } else {
      const { error } = await supabase.from("blog_posts").insert({
        slug: form.slug,
        title: form.title,
        meta_description: form.meta_description || null,
        category: form.category,
        publish_date: form.publish_date,
        reading_time: form.reading_time,
        featured: form.featured,
        is_pillar: form.is_pillar,
        excerpt: form.excerpt || null,
        content: form.content,
        status: form.status,
      });
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Created" });
        setDialogOpen(false);
        fetchPosts();
      }
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Deleted" });
      fetchPosts();
    }
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage blog articles. {posts.length} post{posts.length !== 1 ? "s" : ""} in database.</CardDescription>
          </div>
          <Button onClick={openNew}><Plus className="mr-2 h-4 w-4" /> New Post</Button>
        </CardHeader>
        <CardContent>
          {posts.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">No blog posts yet. Click "New Post" to create one.</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-medium text-foreground">{post.title}</p>
                      <Badge variant={post.status === "published" ? "default" : "secondary"} className="shrink-0 text-xs">
                        {post.status}
                      </Badge>
                      {post.featured && <Badge variant="outline" className="shrink-0 text-xs">Featured</Badge>}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      /{post.slug} · {post.category} · {post.reading_time} min · {post.publish_date}
                    </p>
                  </div>
                  <div className="ml-3 flex shrink-0 gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(post)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)} className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Post" : "New Post"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} placeholder="my-post-slug" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Meta Description</Label>
              <Input value={form.meta_description} onChange={(e) => setForm((f) => ({ ...f, meta_description: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <Textarea value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} rows={2} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(blogCategories).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => setForm((f) => ({ ...f, status: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Reading Time (min)</Label>
                <Input type="number" value={form.reading_time} onChange={(e) => setForm((f) => ({ ...f, reading_time: parseInt(e.target.value) || 5 }))} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Publish Date</Label>
                <Input type="date" value={form.publish_date} onChange={(e) => setForm((f) => ({ ...f, publish_date: e.target.value }))} />
              </div>
              <div className="flex items-end gap-4 pb-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))} />
                  Featured
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.is_pillar} onChange={(e) => setForm((f) => ({ ...f, is_pillar: e.target.checked }))} />
                  Pillar Article
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Content (Markdown) *</Label>
              <Textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} rows={12} className="font-mono text-sm" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {editing ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
