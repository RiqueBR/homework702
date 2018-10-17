const data = require('./data/instrument_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require("./views/select_view.js")
const InstrumentInfoView = require('./views/instrument_info_view.js')


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('#instrument-families')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents()


  const infoDiv = document.querySelector('#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv)
  instrumentInfoDisplay.bindEvents()


  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents()

});
