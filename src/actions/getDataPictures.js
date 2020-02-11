const url = 'https://js.dump.academy/kekstagram/data';

export const asyncGetPictures = () => {
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(new Error(
            'Response failed: ' + response.status + ' (' + response.statusText + ')',
          ));
        }

        return response.json();
      }).then(result => {
        dispatch({
          type: 'GET_DATA_PICTURES',
          pictures: result
        })
      }).catch(error => {
        throw error;
      })
  };
}
