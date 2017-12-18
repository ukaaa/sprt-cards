import * as moment from 'moment';

export const seasons: any = {
  spring: {
    start: '2016-03-21T00:00:00.000Z',
    end: '2016-06-20T23:59:59.000Z'
  },
  summer: {
    start: '2016-06-21T00:00:00.000Z',
    end: '2016-09-20T23:59:59.000Z'
  },
  fall: {
    start: '2016-09-21T00:00:00.000Z',
    end: '2016-12-20T23:59:59.000Z'
  },
  winter: {
    start: '2016-12-21T00:00:00.000Z',
    end: '2017-03-20T23:59:59.000Z'
  },
  early: {},
  late: {}
};

Object.keys(seasons).forEach(function(key) {
  if (key !== 'early' && key !== 'late') {
    const season = seasons[key];
    season.recurrence = { 'years': 1 };
    seasons.early[key] = Object.assign({}, season);
    seasons.early[key].end = moment(seasons.early[key].end).subtract(2, 'month').toISOString();
    seasons.late[key] = Object.assign({}, season);
    seasons.late[key].start = moment(seasons.late[key].start).add(2, 'month').toISOString();
  }
});
