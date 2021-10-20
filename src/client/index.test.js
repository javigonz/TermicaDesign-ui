import mockAxios from "jest-mock-axios";
import client from "./index";

afterEach(() => {
  mockAxios.reset();
});

describe("getWorks method", () => {
  it("should call get method with properly params", async () => {
    const responseObj = { data: "foo" };
    mockAxios.request.mockReturnValue(responseObj);
    const promise = await client.getWorks();
    const result = await promise;

    expect(result).toEqual("foo");
    const request = mockAxios.request;
    expect(request).toHaveBeenCalledWith({
      url: "https://api.termicadesign.com/termicadesign-api/get-works",
      headers: expect.any(Object),
      method: "GET",
    });
  });

  it("should return error if rejected call", async () => {
    const err = new Error("test error");
    mockAxios.request.mockRejectedValueOnce(err);

    try {
      await client.getWorks();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});

describe("getLastCommitInfo method", () => {
  it("should call get method with properly params", async () => {
    const responseObj = { data: "foo" };
    mockAxios.request.mockReturnValue(responseObj);
    const promise = await client.getLastCommitInfo();
    const result = await promise;

    expect(result).toEqual("foo");
    const request = mockAxios.request;
    expect(request).toHaveBeenCalledWith({
      url: "https://api.github.com/repos/javigonz/termicadesign/commits?Fbuild.gradle&page=1&per_page=1",
      method: "GET",
    });
  });

  it("should return error if rejected call", async () => {
    const err = new Error("test error");
    mockAxios.request.mockRejectedValueOnce(err);

    try {
      await client.getLastCommitInfo();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});

describe("sendEmail method", () => {
  it("should call get method with properly params", async () => {
    const responseObj = { data: "foo" };
    const params = { foo: "bar" };
    mockAxios.request.mockReturnValue(responseObj);
    const promise = await client.sendEmail(params);
    const result = await promise;

    expect(result).toEqual("foo");
    const request = mockAxios.request;
    expect(request).toHaveBeenCalledWith({
      url: "https://api.termicadesign.com/termicadesign-api/send-email",
      method: "POST",
      data: params,
      headers: expect.any(Object),
    });
  });

  it("should return error if rejected call", async () => {
    const err = new Error("test error");
    mockAxios.request.mockRejectedValueOnce(err);

    try {
      await client.sendEmail();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});
