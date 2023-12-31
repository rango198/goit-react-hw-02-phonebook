import { Component } from 'react';
import { BtnPhone, ContactForm, Input, LabelInt } from './Form.styled';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiGingerbreadMan } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.handelSubmit}>
          <LabelInt>
            <div>
              <GiGingerbreadMan /> Name
            </div>
            <Input
              name="name"
              type="text"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </LabelInt>
          <LabelInt>
            <div>
              <FaPhoneAlt /> Number
            </div>
            <Input
              name="number"
              type="tel"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </LabelInt>

          <BtnPhone type="submit">
            Add contact <AiOutlineUserAdd />
          </BtnPhone>
        </ContactForm>
      </div>
    );
  }
}
