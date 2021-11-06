const ErrorText = {
  err_bad_service:
    'Provider not allowed (i.e. right now - not gitlab or github)',
  err_failed_to_fetch_from_repo:
    'Failed to fetch latest commit from repo (i.e. repository not found)',
  err_counter_failed: 'Report maker failed',
};

const getErrorText = (error) => ErrorText[error];

export default getErrorText;
