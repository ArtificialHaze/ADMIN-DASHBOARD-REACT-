import React, { useState } from "react";
import Calendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import FormatDate from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "./theme";
import Header from "./Header";

const CalendarData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateString}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"20px"}>
      <Header title={"CALENDAR"} subtitle={"Full calendar interactive page"} />
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* CALENDAR LEFT-SIDE */}
        <Box
          flex={"1 1 20%"}
          backgroundColor={colors.primary[400]}
          p={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0px",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {FormatDate(event, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={"1 1 100%"} ml={"15px"}>
          <Calendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            initialView="dayGridMonth"
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All day event", date: "2023-06-14" },
              { id: "5678", title: "Timed event", date: "2023-07-14" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarData;
