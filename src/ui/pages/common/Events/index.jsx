import React from "react";
import Events from "./Events";
import { withEvents } from "state/events";
import { withCurrentEvent } from "state/event/current";
import moment from "moment";
import styles from "./Events.module.scss";

moment.locale("hr", {
	week: {
		dow: 1
	}
});

export default withCurrentEvent(
	withEvents(
		class extends React.Component {
			state = {
				shouldCreate: false,
				groupBy: "groupEventsByDay"
			};

			selectOptions = [
				{
					groupBy: "groupEventsByDay",
					date: moment()
						.startOf("day")
						.toISOString(),
					value: 0,
					label: "Today"
				},
				{
					groupBy: "groupEventsByDay",
					date: moment()
						.add(7, "days")
						.endOf("day")
						.toISOString(),
					value: 1,
					label: "Upcoming 7 days"
				},
				{
					groupBy: "groupEventsByWeek",
					date: moment()
						.add(30, "days")
						.endOf("day")
						.toISOString(),
					value: 2,
					label: "Upcoming 30 days"
				}
			];

			dateFormatType = "DD. MMM, YYYY";

			componentDidMount() {
				const { events, setCurrentEvent, currentEvent } = this.props;
				this.updateEvents(this.selectOptions[1].value);
				!currentEvent.title && events.length && setCurrentEvent(events[0]);
			}

			shouldComponentUpdate(nextProps, nextState) {
				return this.props.events !== nextProps.events;
			}

			updateShouldCreate = shouldCreate => this.setState({ shouldCreate });

			updateEvents = selectOptionId => {
				const option = this.selectOptions[selectOptionId];
				this.setState({ groupBy: option.groupBy }, () => {
					this.props.getEvents({
						calendarId: "primary",
						timeMin: moment()
							.startOf("day")
							.toISOString(),
						timeMax: option.date,
						showDeleted: false,
						singleEvents: true,
						orderBy: "startTime"
					});
				});
			};

			onEventsLengthChange = event => {
				this.updateEvents(event.target.value);
			};

			groupEventsByWeek = () => {
				const { events } = this.props;
				const groupedEvents = events.reduce((eventsList, event) => {
					const startOfTheWeek = moment(event.startDate).startOf("week");
					const endOfTheWeek = moment(event.startDate).endOf("week");
					const dateProp = `${startOfTheWeek.format(
						this.dateFormatType
					)} - ${endOfTheWeek.format(this.dateFormatType)}`;
					eventsList[dateProp] = eventsList[dateProp] || [];
					eventsList[dateProp].push(event);

					return eventsList;
				}, {});

				return groupedEvents;
			};

			groupEventsByDay = () => {
				const { events } = this.props;
				const groupedEvents = events.reduce((eventsList, event) => {
					const formattedDate = moment(event.startDate).format("DD. MMM, YYYY");
					eventsList[formattedDate] = eventsList[formattedDate] || [];
					eventsList[formattedDate].push(event);

					return eventsList;
				}, {});

				return groupedEvents;
			};

			render() {
				const groupedEvents = this[this.state.groupBy]();
				const { shouldCreate } = this.state;

				return (
					<Events
						onEventsLengthChange={this.onEventsLengthChange}
						events={groupedEvents}
						selectOptions={this.selectOptions}
						styles={styles}
						createNewOptions={{
							shouldCreate,
							updateShouldCreate: this.updateShouldCreate
						}}
					/>
				);
			}
		}
	)
);
