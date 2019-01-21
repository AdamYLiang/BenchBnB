class Api::BenchesController < ApplicationController

    def index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 401
        end
    end

    def show
        @bench = Bench.find(params[:id])
    end

    private
    def bench_params
        params.require(:bench).permit(:lat, :lng, :seating, :picture_url, :description)
    end
end