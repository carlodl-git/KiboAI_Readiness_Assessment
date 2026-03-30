-- Public, no-login storage for assessments.
-- Recommended: keep RLS ON, but these policies are intentionally permissive (no auth).
-- If you want to lock this down later, add Auth and scope by user.

create table if not exists public.assessments (
  id text primary key,
  client_id text not null,
  company_name text,
  consultant_name text,
  workshop_date date,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists assessments_client_id_idx on public.assessments (client_id);
create index if not exists assessments_updated_at_idx on public.assessments (updated_at desc);

alter table public.assessments enable row level security;

-- Permissive policies (no auth yet). Anyone can read/write rows.
-- In the UI we still scope by client_id, but this is not a security boundary.
drop policy if exists "assessments_select_all" on public.assessments;
create policy "assessments_select_all"
on public.assessments for select
using (true);

drop policy if exists "assessments_insert_all" on public.assessments;
create policy "assessments_insert_all"
on public.assessments for insert
with check (true);

drop policy if exists "assessments_update_all" on public.assessments;
create policy "assessments_update_all"
on public.assessments for update
using (true)
with check (true);

drop policy if exists "assessments_delete_all" on public.assessments;
create policy "assessments_delete_all"
on public.assessments for delete
using (true);

