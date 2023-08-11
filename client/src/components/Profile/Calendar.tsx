import React from 'react';
import type { Dayjs } from 'dayjs';

import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CalendarApp: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarApp;