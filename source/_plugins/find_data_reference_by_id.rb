module Jekyll
  module FindDataById

    def find_data_reference_by_id(dataset, id, referenceField)
      data = []
      dataset.map do |data_target| 
        unless data_target[referenceField].nil?
          data_target[referenceField].select do |ref|
            if ref['sys']['id'] == id 
              data << data_target
            end
          end
        end
      end
        return data
    end

  end
end

Liquid::Template.register_filter(Jekyll::FindDataById)