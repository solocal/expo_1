var http = require("http");
var path = require("path");

var Edu = require("./edu");

var exports = module.exports;

var buildResponse = function(err)
{
    var response = {};

    if (err) {
        response.ok = false;
        response.err = {};
        response.err.message = err.message;
    }
    else
    {
        response.ok = true;
    }

    return response;
};

var sendResponse = function(responseMethodName, socket, response)
{
    socket.emit(responseMethodName, response);
};

/**
 * Query for candidates.
 *
 * @param responseMethodName
 * @param socket
 * @param data
 */
 exports.queryCandidates = function(responseMethodName, socket, data)
{
    Edu.queryCandidates(data.query, function(err, candidates) {

        var response = buildResponse(err);
        if (response.ok)
        {
            response.candidates = candidates;
        }

        sendResponse(responseMethodName, socket, response);
    });
};

/**
 * Read a candidate
 *
 * @param responseMethodName
 * @param socket
 * @param data
 */
exports.readCandidate = function(responseMethodName, socket, data)
{
    Edu.readCandidate(data.candidateId, function(err, candidate) {

        var response = buildResponse(err);
        if (response.ok)
        {
            response.candidate = candidate;
        }

        sendResponse(responseMethodName, socket, response);
    });
};

/**
 * Queries for schools.
 *
 * @param responseMethodName
 * @param socket
 * @param data
 */
exports.querySchools = function(responseMethodName, socket, data)
{
    Edu.querySchools(data.query, function(err, schools) {

        var response = buildResponse(err);
        if (response.ok)
        {
            response.schools = schools;
        }

        sendResponse(responseMethodName, socket, response);
    });
};

