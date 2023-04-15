import { showErrorToast } from "./showToast";

const linkRegex =
  /\b((?:https?|ftp):\/\/)(?:www\.)?([^\s\/]+\.)(?:[^\s\/]+\.)?([^\s\/]{2,})((?:\/[\w#!:.?+=&%@!\-\/]*)?(?:\b|$))/i;

export const validate = (data) => {
  if (!data.name || data.name <= 2 || data.name.split(" ").length > 4) {
    console.log("Name should be between 2 to 4 words");
    showErrorToast("Name should be between 2 to 4 words");
    return false;
  }

  if (data.desc.split(" ").length < 5 || data.desc.split(" ").length > 20) {
    showErrorToast("Description should be between 5 to 20 words");
    return false;
  }

  if (!data.gh_link || !linkRegex.test(data.gh_link)) {
    showErrorToast("Please enter a valid github link");
    return false;
  }

  if (!data.pj_link || !linkRegex.test(data.pj_link)) {
    showErrorToast("Please enter a valid project link");
    return false;
  }

  return true;
};