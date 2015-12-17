module ApplicationHelper
  # CSRF auth token to be inserted in all forms:
  def auth_token_input
  "<input
      type=\"hidden\"
      name=\"authenticity_token\"
      value=\"#{ form_authenticity_token }\">".html_safe
  end
end
