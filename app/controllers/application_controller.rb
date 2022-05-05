class ApplicationController < ActionController::API
  include ActionController::Cookies
  # skip_before_action :verify_authenticity_token
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  
  # def current_user
  #   User.find_by(id: sessions[:user_id])
  # end
  
  private

  def render_not_found_response(error)
    render json: {error:"#{error.model} not found"}, status: :not_found
  end

  def render_invalid_response (invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end