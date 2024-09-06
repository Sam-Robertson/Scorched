$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'bookButton'
        },
        editable: false, // The events won't be editable directly in the calendar
        customButtons: {
            bookButton: {
                text: 'Book',
                click: function() {
                    window.open('https://calendly.com/scorchedprovo', '_blank');
                }
            }
        },
        events: [
            { title: 'Wood Burning', start: '2024-07-13T19:00:00', end: '2024-07-13T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-07-18T19:00:00', end: '2024-07-18T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-08-02T19:00:00', end: '2024-08-02T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-08-07T19:00:00', end: '2024-08-07T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-08-13T19:00:00', end: '2024-08-13T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-08-23T19:00:00', end: '2024-08-23T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-08-30T19:00:00', end: '2024-08-30T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-09-06T19:00:00', end: '2024-09-06T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-09-13T19:00:00', end: '2024-09-13T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-09-19T19:00:00', end: '2024-09-19T22:00:00', allDay: false },
            { title: 'Wood Burning', start: '2024-09-24T19:00:00', end: '2024-09-24T22:00:00', allDay: false },
            { title: 'Fall Festival', start: '2024-10-05T17:00:00', end: '2024-10-05T21:00:00', allDay: false }
        
        ],
        eventRender: function(event, element) {
            var timeText = element.find('.fc-time').text().slice(0, -1);
            var endTime = event.end ? event.end.format('h:mm A') : '';
            var titleText = element.find('.fc-title').text(); 

            if (endTime.length == 8) {
                endTime = endTime.slice(0, 2);
            } else if (endTime.length == 7) {
                endTime = endTime.slice(0, 1);
            }

            element.find('.fc-title').html(titleText + '<br>' + timeText + "-" + endTime + "pm");
            element.find('.fc-time').remove();
        },
        eventClick: function(event) {
            window.open('https://calendly.com/scorchedprovo', '_blank');
        },
        // Adjust the calendar view based on screen size
        viewRender: function(view, element) {
            if (window.matchMedia("(max-width: 575.98px)").matches) {
                $('#calendar').fullCalendar('changeView', 'listMonth');
            } else {
                $('#calendar').fullCalendar('changeView', 'month');
            }
        }
    });
});
