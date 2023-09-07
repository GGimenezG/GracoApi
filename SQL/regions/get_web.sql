CREATE PROCEDURE `regions_get_web`(
	IN iId INT
)
BEGIN

    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
        
   
		IF iId = 0 THEN
			SELECT r.idRegions as id, r.name
			/*INTO @selectdata*/
			FROM regions r
            WHERE r.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SELECT r.idRegions as id, r.name
			/*INTO @selectdata*/
			FROM regions r
			WHERE r.idRegions = iId AND r.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	
	
    SELECT oRes as success, oMessage as message;
END