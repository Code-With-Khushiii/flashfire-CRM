export type CrmPermission =
  | 'email_campaign'
  | 'campaign_manager'
  | 'whatsapp_campaign'
  | 'analytics'
  | 'all_data'
  | 'workflows';

export interface CrmUser {
  email: string;
  name: string;
  permissions: CrmPermission[];
}


