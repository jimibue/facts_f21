class Api::FactsController < ApplicationController
  
  def index
    render json: Fact.all
  end

  def rate
     @fact = Fact.find(params[:id])
     # need the new rating
     @fact.stars = params[:stars]
     @fact.save
     render json: @fact
  end
end
