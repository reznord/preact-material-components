import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import './ButtonsPage.css';
export default class ButtonsPage extends Component {
	render(){
		return (
			<div className="page-buttons">
				<div className="mdc-typography--display2">Props </div>
				<ul className="props">
					<li className="prop">
						<div className="mdc-typography--headline">ripple</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds riple effect to the button</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">accent</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds accent colors to the button</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">primary</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds primary colors to the button</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">dense</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds dense padding to the button</div>
					</li>
					<li className="prop">
						<div className="mdc-typography--headline">compact</div>
						<div className="mdc-typography--subheading1">true/false</div>
						<div className="mdc-typography--body1">Adds compact padding to the button</div>
					</li>
				</ul>

				<div className="mdc-typography--display2">Demo </div>
				<div className="mdc-typography--title">Flats </div>
				<Button>Flat button without ripple</Button>
				<Button ripple={true}>Flat button with ripple</Button>
				<Button accent={true}>Accented Flat button</Button>
				<Button dense={true}>Dense Flat button </Button>
				<Button compact={true}>Compact Flat button </Button>
				<Button primary={true}>Primary Flat button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button raised={true}>Raised button without ripple</Button>
				<Button raised={true} ripple={true}>Raised button with ripple</Button>
				<Button raised={true} accent={true}>Accented Raised button</Button>
				<Button raised={true} dense={true}>Dense Raised button </Button>
				<Button raised={true} compact={true}>Compact Raised button </Button>
				<Button raised={true} primary={true}>Primary Raised button </Button>

				<div className="mdc-typography--title">Raised </div>
				<Button disabled={true}>Disabled button without ripple</Button>
				<Button disabled={true} ripple={true}>Disabled button with ripple</Button>
				<Button disabled={true} accent={true}>Accented Disabled button</Button>
				<Button disabled={true} dense={true}>Dense Disabled button </Button>
				<Button disabled={true} compact={true}>Compact Disabled button </Button>
				<Button disabled={true} primary={true}>Primary Disabled button </Button>
			</div>
		);
	}
}