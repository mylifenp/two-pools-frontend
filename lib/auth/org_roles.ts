import { OrgRoles } from "next-auth";

const ADMIN_ORG = "basic";

const getOrgAndRoles = (org_roles: OrgRoles | undefined) => {
  if (!org_roles) return [];
  return Object.keys(org_roles).map((key) => {
    return {
      id: key,
      name: org_roles[key].name,
      roles: org_roles[key].roles,
    };
  });
};

const isAdmin = (org_roles: OrgRoles | undefined) => {
  const orgs_array = getOrgAndRoles(org_roles);
  return !!orgs_array
    .find((org) => org.name === ADMIN_ORG)
    ?.roles.includes("admin");
};

const isAdminOf = (org_roles: OrgRoles | undefined, org_name: string) => {
  const orgs_array = getOrgAndRoles(org_roles);
  const org = orgs_array.find((org) => org.name === org_name);
  if (!org) return false;
  return org.roles.includes("admin");
};

const isUserOf = (org_roles: OrgRoles | undefined, org_name: string) => {
  const orgs_array = getOrgAndRoles(org_roles);
  const org = orgs_array.find((org) => org.name === org_name);
  if (!org) return false;
  return org.roles.includes("user");
};

export { getOrgAndRoles, isAdmin, isAdminOf, isUserOf };
