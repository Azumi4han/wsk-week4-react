import PropTypes from 'prop-types';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <dialog open={Boolean(item)}>
      <article className="single-view">
        <header>
          <h2>{item.title}</h2>
          <button type="button" className="close" onClick={handleClose}>
            Close
          </button>
        </header>

        {item.media_type.startsWith('image/') ? (
          <img src={item.filename} alt={item.title} />
        ) : (
          <video src={item.filename} controls></video>
        )}

        <p>{item.description || 'No description.'}</p>

        <dl>
          <dt>Owner</dt>
          <dd>{item.username ?? `User ${item.user_id}`}</dd>
          <dt>Type</dt>
          <dd>{item.media_type}</dd>
          <dt>Size</dt>
          <dd>{item.filesize} bytes</dd>
          <dt>Created</dt>
          <dd>{new Date(item.created_at).toLocaleString('fi-FI')}</dd>
        </dl>
      </article>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    filesize: PropTypes.number,
    media_type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    username: PropTypes.string,
  }).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
