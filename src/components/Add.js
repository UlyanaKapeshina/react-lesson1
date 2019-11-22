import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {

    state = {
      name: '',
      text: '',
      bigText: '',
      checked: false
    }
  
    onInputChangeHandler = (e) => {
      this.setState({ [e.currentTarget.id]: e.currentTarget.value })
    }
  
    onCheckboxChangeHandler = (e) => {
      this.setState({ checked: e.currentTarget.checked })
    }
    validate = () => {
      if (this.state.checked && this.state.name.trim() && this.state.text.trim()) {
        return true
      }
      return false;
    }
    onBtnClickHandler = (e) => {
      e.preventDefault()
      // alert(this.state.name + '\n' + this.state.text)
      const {name, text, bigText} = this.state
      console.log(name, text, bigText)
      this.props.onAddNews({id: +new Date(), author: name, text, bigText})
    }
    render() {
      return (
        <form className="add">
          <input className='add__author' name='author' id='name' type="text" placeholder='укажите имя' value={this.state.name} onChange={this.onInputChangeHandler} />
          <textarea className='add__text' name='text' id='text' type="text" placeholder='введите заголовок новости' value={this.state.text} onChange={this.onInputChangeHandler} />
          <textarea className='add__text' name='bigText' id='bigText' type="text" placeholder='введите текст новости' value={this.state.bigText} onChange={this.onInputChangeHandler} />
  
          <label className='add__label' htmlFor="agree">я согласен с правилами<input type="checkbox" name="agree" onChange={this.onCheckboxChangeHandler} id="agree" /></label>
          <button type="button" className='add__button' disabled={!this.validate()} onClick={this.onBtnClickHandler}>Показать введенное значение</button>
        </form>
      )
    }
  }
  
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
  }
  export default Add