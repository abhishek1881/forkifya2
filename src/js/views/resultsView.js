import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg'; //parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipe found for your Query! Please Try Again!';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();
