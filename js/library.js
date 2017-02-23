$(document).ready(function() {

  var options = {
    valueNames: [ 'result-item__name', {name:'resource-type', attr:'data-type'}, {name:'resource-category', attr:'data-category'}, {name:'resource-objective', attr:'data-objective'}, {name:'resource-methodology', attr:'data-methodology'}]
  };

  var resourceList = new List('resources', options);


  // DROPDOWN FILTERS
  var allFilters = $(".dropdown-wrapper select");
  var searchQueries = {};

  allFilters.on("change", function() {
    filterList();
  });

  function filterList() {
    allFilters.each(function(idx, selection) {
      $(selection).each(function(idx, option) {
        var filterSelection = $(this).attr("data-filter");
        var option = $(this).children(":selected").attr("id");
        searchQueries[filterSelection] = option;
        console.log(option)
      });
    });

    console.log(searchQueries);
    // FILTER WITH DROPDOWNS
    resourceList.filter(function(item) {
      if (item.values()["resource-type"] !== null && item.values()["resource-type"].includes(searchQueries["resource-type"]) && item.values()["resource-category"] !== null && item.values()["resource-category"].includes(searchQueries["resource-category"]) && item.values()["resource-objective"] !== null && item.values()["resource-objective"].includes(searchQueries["resource-objective"]) && item.values()["resource-methodology"] !== null && item.values()["resource-methodology"].includes(searchQueries["resource-methodology"]))  {
        return true;
      } else {
        return false;
      }
    });
  }

  // CLEAR ALL FILTERS
  $(".clear_filters").on("click", function() {
    allFilters.each(function(idx,filter) {
      $('#'+filter.id).prop('selectedIndex',0);
    });
    resourceList.filter();
    searchReset();
    resourceList.sort('result-item__name', { order: "asc" });
  });

  // SEARCH RESET
  function searchReset() {
    resourceList.search();
  }

});