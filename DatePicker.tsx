import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";
const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
};

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A100,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
     
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});
function DateFnsLocalizationExample() {
  const [locale, setLocale] = useState("ru");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleMenuOpen = useCallback(e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }, []);

  const selectLocale = useCallback(locale => {
    setLocale(locale);
    setAnchorEl(null);
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]} >
     <ThemeProvider theme={materialTheme}>
        <DatePicker
          disableFuture
          value={selectedDate}
          openTo="year"
          format="dd.MM.yyyy"
          views={["year", "month", "date"]}
          onChange={handleDateChange}
          className="uk-width-1-3 uk-text-small"
        />

        <Menu
          id="locale-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {Object.keys(localeMap).map(localeItem => (
            <MenuItem
              key={localeItem}
              selected={localeItem === locale}
              onClick={() => selectLocale(localeItem)}
            >
              {localeItem}
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default DateFnsLocalizationExample;