// Author: Igor Dimitrijević (@igorskyflyer)

// Consts
const TESTS_COUNT = 5

// Cache these
const btnTest = document.querySelector('#btn-test')
const btnTestReload = document.querySelector('#btn-test-reload')
const testError = document.querySelector('#test-error')
const testProgress = document.querySelector('#test-progress')
const testPosts = document.querySelector('#test-posts')

// Flags
let hasError = false

/**
 *
 * @param {number} num
 */
function markAsSuccess(num, postsCount = 0) {
  const testResult = document.querySelectorAll('#test-result p')

  const timeout = setTimeout(
    () => {
      testResult[num].classList.add('util-show')
      increaseProgress(1)

      if (num === TESTS_COUNT - 1) {
        setUpTestPosts(postsCount)
        showPostsTest()
      }

      clearTimeout(timeout)
    },
    (num + 1) * 200
  )
}

/**
 *
 * @param {string} error
 * @param {boolean} append
 */
function showError(error, append = false) {
  if (append === true) {
    testError.innerHTML += `${error}<br>`
  } else {
    testError.innerHTML = error
  }

  hasError = true
  setProgressStatus('error')
  testError.classList.add('util-show')
}

function showProgress(postsCount) {
  testProgress.classList.add('util-show')
  testProgress.value = 0
  testProgress.max = TESTS_COUNT + postsCount
}

function increaseProgress() {
  testProgress.value = parseInt(testProgress.value) + 1
}

function disableButton() {
  btnTest.disabled = true
}

/**
 *
 * @param {number} num
 */
function postChecked(num) {
  const timeout = setTimeout(
    () => {
      increaseProgress(1)
      clearTimeout(timeout)
    },
    (num + 1) * 200
  )
}

function showPostsTest() {
  testPosts.classList.add('util-show')
}

/**
 *
 * @param {number} num
 * @param {number} postsCount
 */
function postsTest(num, postsCount) {
  const timeout = setTimeout(
    () => {
      testPosts.textContent = `✅ Posts: ${
        num + 1
      }/${postsCount} content checked`
      clearTimeout(timeout)

      if (num === postsCount - 1) {
        btnTestReload.classList.add('util-show')
        btnTestReload.classList.remove('util-fake-disabled')

        if (!hasError) {
          setProgressStatus('success')
        }
      }
    },
    (num + 1) * 200
  )
}

function setUpTestPosts(postsCount) {
  testPosts.textContent = `✅ Posts: ${0}/${postsCount} content checked`
}

/**
 * @param {'success'|'error'} status
 */
function setProgressStatus(status) {
  testProgress.classList.add(`progress-${status}`)
}

function runTest(postsCount) {
  disableButton()
  showProgress(postsCount)

  const v1Posts = document.querySelectorAll('#posts-v1 .post')

  if (!(v1Posts instanceof NodeList) || v1Posts.length === 0) {
    showError("Couldn't get V1 posts.")
    return
  }

  markAsSuccess(0)

  const afterV2Posts = document.querySelectorAll('#posts-after-v2 .post')

  if (!(afterV2Posts instanceof NodeList) || afterV2Posts.length === 0) {
    showError("Couldn't get V2+ posts.")
    return
  }

  markAsSuccess(1)

  const v1Count = v1Posts.length

  markAsSuccess(2)

  const afterV2Count = afterV2Posts.length

  markAsSuccess(3)

  if (v1Count !== afterV2Count) {
    showError('Posts count mismatch.')
    return
  }

  markAsSuccess(4, postsCount)

  const timeout = setTimeout(() => {
    for (let i = 0; i < v1Count; i++) {
      const v1Post = v1Posts[i].innerHTML
      const afterV2Post = afterV2Posts[i].innerHTML

      postChecked(i)

      if (v1Post.length === 0) {
        showError(`Empty post at #${i + 1} of V1`, true)
      }

      if (afterV2Post.length === 0) {
        showError(`Empty post at #${i + 1} of V2+`, true)
      }

      if (v1Post !== afterV2Post) {
        showError(`Mismatch of posts at #${i + 1}`, true)
      } else {
        postsTest(i, postsCount)
      }
    }

    clearTimeout(timeout)
  }, 1500)
}
