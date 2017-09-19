## Happy Hour Power

[![CircleCI](https://circleci.com/gh/the-oem/happy-hour-power/tree/master.svg?style=svg)](https://circleci.com/gh/the-oem/happy-hour-power/tree/master)


## API Usage
Explanation coming

*Success 200/201 Responses:*

When data is returned from a successful API request, the data will be formatted in a
```
{
  data: [<returned data>]
}
```

*Failure 404 Responses:*
```
{
  data: {
    error: <error message (string format)>,
  }
}
```
*Failure 500 Responses:*
```
{
  error: <error object returned from server>,
}
```

---

## Endpoints

#### Authentication
- **[<code>POST</code> /api/v1/auth]()** +

#### Location Resources

- **[<code>GET</code> /api/v1/locations]()** +
- **[<code>POST</code> /api/v1/locations]()** +

#### Locations Resources

- **[<code>GET</code> locations](/docs/GET_locations.md)** +
- **[<code>POST</code> locations](/docs/POST_locations.md)** +
- **[<code>GET</code> locations/:id](/docs/GET_locations_id.md)** +
- **[<code>PUT</code> locations/:id](/docs/PUT_locations.md)** +
- **[<code>DELETE</code> locations/:id/:token](/docs/DELETE_locations.md)** +

#### Photos Resources

- **[<code>GET</code> photos](/docs/GET_photos.md)** +
- **[<code>POST</code> photos](/docs/POST_photos.md)** +
- **[<code>GET</code> photos/:id](/docs/GET_photos_id.md)** +
- **[<code>PUT</code> photos/:id](/docs/PUT_photos.md)** +
- **[<code>DELETE</code> photos/:id/:token](/docs/DELETE_photos.md)** +
