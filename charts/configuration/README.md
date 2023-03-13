# Chart Configuration

* `showName` - show name of the chart

# Columns configuration

#### Column types:
 * Text
 * Number
 * Date
 * Currency
 * Percent

### digits (for number, percent, currency)
`{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`
- minIntegerDigits:
   The minimum number of integer digits before the decimal point.
   Default is 1.
- minFractionDigits:
   The minimum number of digits after the decimal point.
   Default is 0.
- maxFractionDigits:
   The maximum number of digits after the decimal point.
   Default is 3.

### locale (for date, number, percent, currency)
A locale code for the locale format rules to use.

### formats(for date)
 The date/time components to include, using predefined options or a
 custom format string.

```
 Predefined
 'short'      'M/d/yy, h:mm a'                    6/15/15, 9:03 AM
 'medium'     'MMM d, y, h:mm:ss a'               Jun 15, 2015, 9:03:01 AM
 'long'       'MMMM d, y, h:mm:ss a z'            June 15, 2015 at 9:03:01 AM GMT+1
 'full'       'EEEE, MMMM d, y, h:mm:ss a zzzz'   Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
 'shortDate'  'M/d/yy'                            6/15/15
 'mediumDate' 'MMM d, y'                          Jun 15, 2015
 'longDate'   'MMMM d, y'                         June 15, 2015
 'fullDate'   'EEEE, MMMM d, y'                   Monday, June 15, 2015
 'shortTime'  'h:mm a'                            9:03 AM
 'mediumTime' 'h:mm:ss a'                         9:03:01 AM
 'longTime'   'h:mm:ss a z'                       9:03:01 AM GMT+1
 'fullTime'   'h:mm:ss a zzzz'                    9:03:01 AM GMT+01:00

 Era              G, GG & GGG       Abbreviated                       AD
                  GGGG              Wide                              Anno Domini
                  GGGGG             Narrow                            A
 Year             y                 Numeric: minimum digits           2, 20, 201, 2017, 20173
                  yy                Numeric: 2 digits + zero padded   02, 20, 01, 17, 73
                  yyy               Numeric: 3 digits + zero padded   002, 020, 201, 2017, 20173
                  yyyy              Numeric: 4 digits or more + zero  0002, 0020, 0201, 2017, 20173
                                    padded
 Week-numbering   Y                 Numeric: minimum digits           2, 20, 201, 2017, 20173
 year
                  YY                Numeric: 2 digits + zero padded   02, 20, 01, 17, 73
                  YYY               Numeric: 3 digits + zero padded   002, 020, 201, 2017, 20173
                  YYYY              Numeric: 4 digits or more + zero  0002, 0020, 0201, 2017, 20173
                                    padded
 Month            M                 Numeric: 1 digit                  9, 12
                  MM                Numeric: 2 digits + zero padded   09, 12
                  MMM               Abbreviated                       Sep
                  MMMM              Wide                              September
                  MMMMM             Narrow                            S
 Month            L                 Numeric: 1 digit                  9, 12
 standalone
                  LL                Numeric: 2 digits + zero padded   09, 12
                  LLL               Abbreviated                       Sep
                  LLLL              Wide                              September
                  LLLLL             Narrow                            S
 Week of year     w                 Numeric: minimum digits           1... 53
                  ww                Numeric: 2 digits + zero padded   01... 53
 Week of month    W                 Numeric: 1 digit                  1... 5
 Day of month     d                 Numeric: minimum digits           1
                  dd                Numeric: 2 digits + zero padded   01
 Week day         E, EE & EEE       Abbreviated                       Tue
                  EEEE              Wide                              Tuesday
                  EEEEE             Narrow                            T
                  EEEEEE            Short                             Tu
 Week day         c, cc             Numeric: 1 digit                  2
 standalone
                  ccc               Abbreviated                       Tue
                  cccc              Wide                              Tuesday
                  ccccc             Narrow                            T
                  cccccc            Short                             Tu
 Period           a, aa & aaa       Abbreviated                       am/pm or AM/PM
                  aaaa              Wide (fallback to a when missing) ante meridiem/post meridiem
                  aaaaa             Narrow                            a/p
 Period*          B, BB & BBB       Abbreviated                       mid.
                  BBBB              Wide                              am, pm, midnight, noon, morning, afternoon, evening, night
                  BBBBB             Narrow                            md
 Period           b, bb & bbb       Abbreviated                       mid.
 standalone*
                  bbbb              Wide                              am, pm, midnight, noon, morning, afternoon, evening, night
                  bbbbb             Narrow                            md
 Hour 1-12        h                 Numeric: minimum digits           1, 12
                  hh                Numeric: 2 digits + zero padded   01, 12
 Hour 0-23        H                 Numeric: minimum digits           0, 23
                  HH                Numeric: 2 digits + zero padded   00, 23
 Minute           m                 Numeric: minimum digits           8, 59
                  mm                Numeric: 2 digits + zero padded   08, 59
 Second           s                 Numeric: minimum digits           0... 59
                  ss                Numeric: 2 digits + zero padded   00... 59
 Fractional       S                 Numeric: 1 digit                  0... 9
 seconds
                  SS                Numeric: 2 digits + zero padded   00... 99
                  SSS               Numeric: 3 digits + zero padded   000... 999
                                    (= milliseconds)
 Zone             z, zz & zzz       Short specific non location       GMT-8
                                    format (fallback to O)
                  zzzz              Long specific non location        GMT-08:00
                                    format (fallback to OOOO)
                  Z, ZZ & ZZZ       ISO8601 basic format              -0800
                  ZZZZ              Long localized GMT format         GMT-8:00
                  ZZZZZ             ISO8601 extended format + Z       -08:00
                                    indicator for offset 0 (= XXXXX)
                  O, OO & OOO       Short localized GMT format        GMT-8
                  OOOO              Long localized GMT format         GMT-08:00

```

### aggregation (for date) Optional
Aggregation is the link between the column and the aggregation filter if the column is grouped by this filter

### timezone(for date)
A timezone offset (such as `'+0430'`), or a standard.
UTC/GMT or continental US timezone abbreviation.