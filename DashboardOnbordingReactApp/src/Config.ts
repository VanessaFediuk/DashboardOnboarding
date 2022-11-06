// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes
// https://analysis.windows.net/powerbi/api/Report.Read.All
export const scopes: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// ToDo fill in your clientId
// Client Id (Application Id) of the AAD app.
export const clientId: string = "";

// ToDo fill in the id of your workspace
// Id of the workspace where the report is hosted
export const workspaceId: string = "";

// ToDo fill in the id of your report
// Id of the report to be embedded
export const reportId: string = "";