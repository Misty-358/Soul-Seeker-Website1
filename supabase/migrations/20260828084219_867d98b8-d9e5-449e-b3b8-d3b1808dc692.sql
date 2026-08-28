GRANT SELECT, INSERT, UPDATE, DELETE ON public.signups TO authenticated;
GRANT INSERT ON public.signups TO anon;
GRANT ALL ON public.signups TO service_role;

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

GRANT ALL ON public.email_send_log TO service_role;
GRANT ALL ON public.email_send_state TO service_role;
GRANT ALL ON public.suppressed_emails TO service_role;
GRANT ALL ON public.email_unsubscribe_tokens TO service_role;

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;