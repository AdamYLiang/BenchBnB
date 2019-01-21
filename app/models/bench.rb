# == Schema Information
#
# Table name: benches
#
#  id          :bigint(8)        not null, primary key
#  description :string
#  lat         :float
#  lng         :float
#  seating     :integer          default(2), not null
#  picture_url :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
    validates_presence_of :description, :lat, :lng
end
