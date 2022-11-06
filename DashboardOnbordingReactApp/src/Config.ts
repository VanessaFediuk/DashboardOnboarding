// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes
// https://analysis.windows.net/powerbi/api/Report.Read.All
export const scopes: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "ec832b7b-04b3-4b8e-937b-8422c18a6b3d";

// Id of the workspace where the report is hosted
export const workspaceId: string = "3e05d0d8-160d-4e6c-b1db-197561063245";

// Id of the report to be embedded
export const reportId: string = "24e16129-5113-427e-8044-01e1d00ecf6c";