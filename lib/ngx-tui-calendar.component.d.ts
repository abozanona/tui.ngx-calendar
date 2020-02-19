import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TuiCalendarOptions, TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';
import { AfterRenderScheduleEvent, BeforeCreateScheduleEvent, BeforeDeleteScheduleEvent, BeforeUpdateScheduleEvent, ClickDaynameEvent, ClickScheduleEvent } from './Models/Events';
import { Schedule } from './Models/Schedule';
export declare class NgxTuiCalendarComponent implements OnChanges, TuiCalendarOptions {
    private elm;
    private defaults;
    defaultView: string;
    taskView: boolean;
    scheduleView: boolean;
    template: object;
    month: object;
    week: object;
    schedules: Schedule[];
    beforeCreateSchedule: EventEmitter<BeforeCreateScheduleEvent>;
    beforeDeleteSchedule: EventEmitter<BeforeDeleteScheduleEvent>;
    afterRenderSchedule: EventEmitter<AfterRenderScheduleEvent>;
    tuiCalendarCreated: EventEmitter<{
        tuiCalendar: any;
    }>;
    dayNameClicked: EventEmitter<ClickDaynameEvent>;
    timeClicked: EventEmitter<Date>;
    scheduleClicked: EventEmitter<ClickScheduleEvent>;
    beforeUpdateSchedule: EventEmitter<BeforeUpdateScheduleEvent>;
    private tuiCalendar;
    constructor(elm: ElementRef, defaults: TuiCalendarDefaults);
    ngOnChanges(changes: SimpleChanges): void;
    private updateSchedules();
    setTimeZoneOffset(offset: number): void;
    setTimeZoneOffsetCallback(offset: void): void;
    changeView(view: string): void;
    clear(): void;
    createSchedules(schedules: any[]): void;
    deleteSchedule(scheduleId: string, calendarId: string, silent: boolean): void;
    destroy(): void;
    getDate(): any;
    getDateRangeEnd(): any;
    getDateRangeStart(): any;
    getElement(scheduleId: string, calendarId: string): any;
    getOptions(): any;
    getSchedule(scheduleId: string, calendarId: string): any;
    getViewName(): any;
    hideMoreView(): void;
    next(): void;
    prev(): void;
    openCreationPopup(schedule: any): void;
    render(): void;
    scrollToNow(): void;
    setCalendarColor(calendarId: string, option: any, silent: boolean): void;
    setCalendars(calendars: any[]): void;
    setDate(date: Date | string): void;
    setOptions(options: TuiCalendarOptions, silent: boolean): void;
    setTheme(theme: string[]): void;
    today(): void;
    toggleSchedules(calendarId: string, toHide: boolean, render: boolean): void;
    updateSchedule(scheduleId: string, calendarId: string, scheduleData: Schedule, silent: boolean): void;
}
